# Ćwiczenie 3 - posługiwanie się tablicami i funkcjami

## Wykonaj następujące zadania: 
<ol>
  <li>
    Napisz funkcję, która łączy dwie tablice przy pomocy wskazanej operacji - jako pierwszy parametr przyjmuje pewną funkcję dwuparametrową i wypełnia tablicę wyjściową wynikiem wykonania tej funkcje na kolejnych elementach obu tablic. Np. jeśli przekazano funkcję obliczającą sumę dwóch liczb oraz tablice [4, 5, 6] i [10, 20, 30], zostanie zwrócone [14, 25, 36].
    <ul>
      <li>
        Wypróbuj użycie tej funkcji do stworzenia tablicy punktów z dwóch tablic wypełnionych odpowiednio współrzędnymi x oraz y (czyli np. z tablic [1, 2, 3] oraz [7, 8, 9] zostaną stworzone [{x:1,y:7}, {x:2,y:8}, {x:3,y:9}]).
      </li>
      <li>
        (***) Spróbuj napisać taką wersję tej funkcji, która może przyjąć dowolną liczbę tablic (oraz pewną funkcję przyjmującą liczbę parametrów równą liczbie tablic) - wówczas np. przekazanie [1,2,3], [5,6,7] i [10,20,30] oraz funkcji dodającej trzy liczby zwróci [16,28,40].
      </li>
    </ul>
  <li>
    Napisz funkcję, która przyjmuje dwa parametry oznaczające początek i koniec zakresu, a następnie zwraca funkcję bezparametrową, której kolejne wywołania będą zwracać kolejne całkowite wartości tego zakresu (lub NaN po jego przekroczeniu). Np. dla argumentów 3 i 5 kolejne wywołania zwróconej funkcji będą zwracać 3, 4, 5, NaN. Funkcja powinna działać również wtedy, gdy pierwszy parametr jest większy od drugiego (przechodząc zakres w drugą stronę), np. dla argumentów 7 i 3 kolejno będą zwracane wartości 7, 6, 5, 4, 3, NaN.
  </li>
<ol>
