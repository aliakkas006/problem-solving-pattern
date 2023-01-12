class Solution:
    def isInteger(self, s):
        if s == "":
            return False

        if s[0] == '+' or s[0] == '-':
            s = s[1:]

        return s.isnumeric()

    def isDecimal(self, s):
        if s == "":
            return False

        if s[0] == '+' or s[0] == '-':
            s = s[1:]

        parts = s.split(".")

        if len(parts) != 2:
            return False

        if parts[0] == "":
            return parts[1].isnumeric()

        if parts[1] == "":
            return parts[0].isnumeric()

        return parts[0].isnumeric() and parts[1].isnumeric()

    def isNumber(self, s: str) -> bool:
        s = s.strip()

        if s == "":
            return False

        s = s.lower()
        e_count = 0

        for char in s:
            if char == "e":
                e_count += 1
                continue

            if char not in "+-0123456789.":
                return False

        if e_count > 1:
            return False

        parts = s.split('e')

        if len(parts) == 1:
            s = parts[0]  # without e
            return self.isInteger(s) or self.isDecimal(s)

        elif len(parts) == 2:
            s1 = parts[0]
            s2 = parts[1]  # must integer

            if self.isInteger(s1) or self.isDecimal(s1):
                return self.isInteger(s2)
            else:
                return False

        else:
            return False

        return True


print(Solution().isNumber("-123.456e789"))
