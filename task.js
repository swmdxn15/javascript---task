function solution(D) {
  const daysOfWeek = ["Sun","Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const dailyTotals = {
    'Mon': 0,
    'Tue': 0,
    'Wed': 0,
    'Thu': 0,
    'Fri': 0,
    'Sat': 0,
    'Sun': 0
  };
  let dateStr = null;
  for (dateStr in D) {
    const date = new Date(dateStr);
    const dayOfWeek = date.getDay();
    if (dayOfWeek === 1) {
      dailyTotals[daysOfWeek[1]] += D[dateStr];
    } else if (dayOfWeek === 2) {
      dailyTotals[daysOfWeek[2]] += D[dateStr];
    } else if (dayOfWeek === 3) {
      dailyTotals[daysOfWeek[3]] += D[dateStr];
    } else if (dayOfWeek === 4) {
      dailyTotals[daysOfWeek[4]] += D[dateStr];
    } else if (dayOfWeek === 5) {
      dailyTotals[daysOfWeek[5]] += D[dateStr];
    } else if (dayOfWeek === 6) {
      dailyTotals[daysOfWeek[6]] += D[dateStr];
    } else {
      dailyTotals[daysOfWeek[0]] += D[dateStr];
    }
  }
  let countZero = 0;
  let amount = 0;
  let i = 1;
  while (i < daysOfWeek.length - 1) {
    if (dailyTotals[daysOfWeek[i]] === 0) {
      if (dailyTotals[daysOfWeek[i + 1]] !== 0 && (i + 1 < daysOfWeek.length - 1)) {
        dailyTotals[daysOfWeek[i]] = ((dailyTotals[daysOfWeek[i - 1]]) + (dailyTotals[daysOfWeek[i + 1]] - dailyTotals[daysOfWeek[i - 1]]) / 2);
      } else {
        countZero = 1;
        for (let j = i + 1; j < daysOfWeek.length - 1; j++) {
          if (dailyTotals[daysOfWeek[j]] === 0) {
            countZero += 1;
          }
        }
        const j = i + countZero;
        amount = (((dailyTotals[daysOfWeek[j]]) - (dailyTotals[daysOfWeek[i - 1]])) / (countZero + 1));
        for (let z = i; z < j; z++) {
          dailyTotals[daysOfWeek[z]] = dailyTotals[daysOfWeek[z - 1]] + amount;
        }
        i = j;
      }
    }
    i++;
  }
  return dailyTotals;
}


//Test1
const D1 = {'2020-01-01':4, '2020-01-02': 4, '2020-01-03': 6, '2020-01-04': 8, '2020-01-05': 2, '2020-01-06': -6, '2020-01-07': 2, '2020-01-08': -2};
const expectedOutput = { Mon: -6, Tue: 2, Wed: 2, Thu: 4, Fri: 6, Sat: 8, Sun: 2 }

const actualOutput = solution(D1);
if (JSON.stringify(actualOutput) === JSON.stringify(expectedOutput)) {
  console.log("Test 1 passed");
} else {
  console.log("Test 1 failed");
}


// Test 2
const D2 = {'2020-01-01': 0, '2020-01-02': 0, '2020-01-03': 0, '2020-01-04': 0, '2020-01-05': 0, '2020-01-06': 0, '2020-01-07': 0};
const expectedOutput2 = { Mon: 0, Tue: 0, Wed: 0, Thu: 0, Fri: 0, Sat: 0, Sun: 0 };
const actualOutput2 = solution(D2);
if (JSON.stringify(actualOutput2) === JSON.stringify(expectedOutput2)) {
  console.log("Test 2 passed");
} else {
  console.log("Test 2 failed");
}

// Test 3
const D3 = {'2020-01-01':6, '2020-01-04': 12,'2020-01-05': 14, '2020-01-06': 2, '2020-01-07':4};
const expectedOutput3 = {'Mon': 2, 'Tue': 4, 'Wed': 6, 'Thu': 8, 'Fri': 10, 'Sat': 12, 'Sun': 14};
const actualOutput3 = solution(D3);
if (JSON.stringify(actualOutput3) === JSON.stringify(expectedOutput3)) {
  console.log("Test 3 passed");
} else {
  console.log("Test 3 failed");
}

