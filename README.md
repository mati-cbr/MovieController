# MovieController

Aplikacja webowa oraz wtyczka przeglądarkowa (docelowo firefox, chrome) służąca do synchronizacji filmów pomiędzy użytkownikami na serwisie YouTube.

Główne funkcjonalności (są jeszcze w TODO):

- Tworzenie pokoju (sesji) przez użytkownika, który ma być kontrolerem (hostem) co w tej chwili ma być oglądane
- Zaproszenie innych użytkowników do pokoju (sesji) poprzez podanie im ID utworzonego pokoju (będzie można go wysłać poprzez zewnętrzny komunikator)
- Dołączenie do sesji
- Online chat wewnątrz grupowy, na którym goście (w tym host) mogą podawać propozycje filmików do obejrzenia
- Host ustawia URL filmiku razem z wartością od jakiego momentu (od jakiej minuty/sekundy) ma być on uruchomiony oraz udostępnia tę informację wszystkim gościom w pokoju (sesji)
- Każdy z gości powinien zaakceptować dany filmik oraz minutę/sekundę od której ma być on włączony
- Tylko host po zaakceptowaniu przez gości filmiku ma możliwość uruchomienia filmiku u siebie i u wszystkich gości w pokoju (sesji), ma też możliwość pauzowania, przewijania i ponownej synchronizacji wobec minuty/sekundy jaką on ma obecnie u siebie lub według ustalonej na chacie (jest to chwilowy workaround w przypadku pojawienia się u kogoś reklamy)
- Po obejrzeniu do końca lub gdy host zaznaczy, że dany filmik jest obejrzany (zaznaczy to u siebie) do każdego gościa (w tym do hosta) zostanie wysłany formularz do ocenienia danego filmiku i/lub pokoju (sesji)
- Host będzie miał możliwość usunięcia pokoju (sesji) - jeżeli tego nie zrobi dany pokój zostanie usunięty automatycznie po 10 minutach nieaktywnośći (czyli jeżeli od 10 minut nie będzie w niej żadnego oglądanego obecnie filmiku lub nie będzie żadnej aktywności na chacie)
- W przypadku wykrycia 10 minutowej nieaktywności (wypisanej w punkcie wyżej) na ekranie hosta pojawi się okno dialogowe z zapytaniem czy przedłużyć czas trwania pokoju (sesji)
- Każdy host może mieć obecnie otwartą tylko jedną sesję, w przypadku zrobienia nowej musi najpierw usunąć istniejącą
- Rejestracja użytkownika przy pierwszym uruchomieniu aplikacji (wystarczy podać imię i nazwisko, mogą być zmyślone)

Z bardziej technicznych rzeczy ten projekt korzysta z [React Router 7](https://reactrouter.com/home) oraz [Fastify](https://fastify.dev/).
Jest on też forkiem innego, ogólnodostępnego projektu na github (pytania szczegółowe proszę kierować do autora).

## TODO (najważniejsze)

- Zamockować sobie backend na json-ach
- Poprawić strukturę, aby była zgodna z firefox extension i wtedy zrobić extension

## Uruchamianie

1. Sklonuj repozytorium
2. Zainstaluj zależności (możesz wykorzystać do tego `bun.lock`, ale możesz to zrobić ręcznie)
3. Nie zapomnij o `.env` z lokalnymi zmiennymi.
4. Uruchom aplikację w trybie deweloperskim (`bun run dev`) lub produkcyjnym (`bun run build && bun run start`)

## Stuktura (często ulega zmianie przy koncepcji autora, może być nieaktualne w stosunku do tego co faktycznie jest w repo bo autorowi nie chciało się tego pilnować XD)

```
client
├── common                   # współdzielone komponenty/funckje między frontem a backened (api)
│   ├── components
│   │   ├── Container.tsx
│   └── util
│       ├── page-title.ts
├── features                 # ficzery, czyli połączenie widoków z funkcjonalnościami
│   └── UserList             
│       ├── components
│       │   └── UserList.tsx
│       └── index.ts         # barrel
├── layouts
│   └── Default.tsx
├── pages                    # widoki renderowane na podstawie reactowych komponentów
│   ├── HomePage.tsx
│   └── UserPage.tsx
├── queries                  # w tym miejscu będą głównie gotowe zapytania do api
│   └── users.ts
├── root.ts
├── routes
│   ├── home.tsx             # ścieżki w routerze, są one ładowane i renderowane z `client/pages`
│   └── users.tsx
├── routes.ts                # konfiguracja ścieżek
└── styles
    └── app.css
server
├── api
├── index.ts                  # sprawdzenie czy wszystko działa przed uruchomieniem
├── start.ts                  # uruchamia serwer Fastify
└── util                      # współdzielone utilsy
```

## Komendy

| Komenda          | Akcja                                                 |
| :--------------- | :---------------------------------------------------- |
| `npm install`    | Instaluje zależności                                  |
| `npm run dev`    | Uruchamia aplikacje w trybie dew. (w vite)            |
| `npm run build`  | Buduje projekt do produkcji do  `./build/`            |
| `npm run format` | Formatuje pliki przy użyciu Biome                     |
| `npm run check`  | Uruchamia lintera                                     |
| `npm run fix`    | Poprawia formatowanie i lintowanie przy użyciu Biome  |
| `npm run start`  | Uruchamia aplikację w Node                            |

## Wtyczka do przeglądarki (na razie tylko firefox)

Będzie dostępna (o ile już nie jest) w formie pliku `.xpi` - należy go dodać ręcznie do firefoxa.
Jak to zrobić - patrz w Internetach.
