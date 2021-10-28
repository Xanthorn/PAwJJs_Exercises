# Ćwiczenie 3 - posługiwanie się tablicami i funkcjami

### Wykonaj następujące zadania: 
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
</ol>

### W poniższych zadaniach nie korzystaj z pętli, a jedynie metod tablic, takich jak forEach, map, filter, reduce.

  3. Napisz funkcję, która jako argument przyjmuje napis, następnie zlicza w nim wystąpienia każdego znaku i zwraca jako obiekt-słownik.
  4. Napisz funkcję, która jako parametr przyjmuje tablicę, z której usuwa co drugi element, a następnie skaluje zawartość do przedziału [0,1] (czyli poddaje każdy element takiemu przekształceniu, by najmniejsza wartość stała się zerem, a największa jedynką), po czym wypisuje całość do konsoli, z dokładnością do dwóch miejsc po przecinku. W zadaniu wykorzystaj metody map i filter.
  5. Stwórz tablicę o zadanym rozmiarze, wypełnij ją losowymi wartościami z przedziału 1-10, a następnie policz (korzystając z metody reduce) ile występuje w niej liczb parzystych i ile wynosi iloczyn wszystkich jej elementów.
