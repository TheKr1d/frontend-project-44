### Hexlet tests and linter status:
[![Actions Status](https://github.com/TheKr1d/frontend-project-lvl1/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/TheKr1d/frontend-project-lvl1/actions)

## SonarQube statuses:
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=TheKr1d_frontend-project-44&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=TheKr1d_frontend-project-44)
[![Quality gate](https://sonarcloud.io/api/project_badges/quality_gate?project=TheKr1d_frontend-project-44)](https://sonarcloud.io/summary/new_code?id=TheKr1d_frontend-project-44)
[![SonarQube Cloud](https://sonarcloud.io/images/project_badges/sonarcloud-light.svg)](https://sonarcloud.io/summary/new_code?id=TheKr1d_frontend-project-44)


# Brain Games Collection

## Common Game Structure
**Shared rules for all games**:
- Answer **3 questions correctly in a row** to win
- Any incorrect input ends the game immediately
- Clean CLI interface following Hexlet standards
- Case-sensitive input validation

---

## Brain Even Game
**Open**: `brain-even`

**Objective**: Identify whether random numbers are even or odd.

**Rules**: Answer **"yes"** (even) or **"no"** (odd).

### Example

```
Question: 15 → no ✓
Question: 6 → yes ✓
Question: 7 → no ✓
Congratulations, Sam!
```

### Demo Video:
[![asciicast](https://asciinema.org/a/kJ7rFwwC5z57a1CH.svg)](https://asciinema.org/a/kJ7rFwwC5z57a1CH)

---

## Brain Calc Game  
**Open**: `brain-calc`

**Objective**: Solve simple arithmetic expressions (+, -, *).

**Rules**: Calculate and enter the numeric result.

### Example

```
Question: 4 + 10 → 14 ✓
Question: 25 - 11 → 14 ✓
Question: 25 * 7 → 175 ✓
Congratulations, Sam!
```

### Demo Video:
[![asciicast](https://asciinema.org/a/0CbIX6YAJK6taZgO.svg)](https://asciinema.org/a/0CbIX6YAJK6taZgO)

---

## Brain GCD Game
**Open**: `brain-gcd`

**Objective**: Find the Greatest Common Divisor (GCD) of two random numbers.

**Rules**: Calculate and enter the GCD of given numbers.

### Example

```
Question: 25 50 → 25 ✓
Question: 100 52 → 4 ✓
Question: 3 9 → 3 ✓
Congratulations, Sam!
```

### Demo Video
[![asciicast](https://asciinema.org/a/LHMn3ThzEC386b1t.svg)](https://asciinema.org/a/LHMn3ThzEC386b1t)

---

## Brain Progression Game
**Open**: `brain-progression`

**Objective**: Find the missing number in an arithmetic progression sequence.

**Rules**: Identify the hidden number replaced by `..` in the number sequence.

### Example

```
Question: 5 7 9 11 13 .. 17 19 21 23 → 15 ✓
Question: 2 5 8 .. 14 17 20 23 26 29 → 11 ✓
Question: 14 19 24 29 34 39 44 49 54 .. → 59 ✓
Congratulations, Sam!
```

### Demo Video
[![asciicast](https://asciinema.org/a/Mh4JviJmKaPF52aY.svg)](https://asciinema.org/a/Mh4JviJmKaPF52aY)

---

## Brain Prime Game
**Open**: `brain-prime`

**Objective**: Determine if a given number is prime.

**Rules**: Answer **"yes"** if the number is prime, **"no"** otherwise.

### Example

```
Question: 7 → yes ✓
Question: 4 → no ✓
Question: 11 → yes ✓
Congratulations, Sam!
```

### Demo Video

[![asciicast](https://asciinema.org/a/kKNH6seYF7YPQysW.svg)](https://asciinema.org/a/kKNH6seYF7YPQysW)