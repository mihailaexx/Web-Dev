let n = prompt("Primes from 1 to n. Enter n")

inner:
  for (let i = 2; i <= n; i++) {
    for (let j = 2; j < i; j++) {
      if (i % j == 0) continue inner;
    }
    console.log(i);
  }