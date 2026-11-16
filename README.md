# node-bek

Төрт арифметикалық функция: қосу, азайту, көбейту және бөлу.

- `arithmetic.js` — Node.js модулі: `add`, `subtract`, `multiply`, `divide`.
- `index.js` — функцияларды қолдану мысалдары.
- `arithmetic.fs` — тапсырмада көрсетілген F# нұсқасы.

## Іске қосу

Node.js орнатылған болуы керек. Қосымша кітапханалар қажет емес.

```bash
npm start
```

Нәтиже:

```text
10 + 5 = 15
10 - 5 = 5
10 * 5 = 50
10 / 5 = 2
10 / 0 = Division by zero is not allowed.
```

JavaScript нұсқасында `divide` функциясы сәтті есептегенде
`{ ok: true, value: ... }`, ал нөлге бөлгенде
`{ ok: false, error: "Division by zero is not allowed." }` қайтарады.
Сондықтан қате өңделіп, бағдарлама жұмысын жалғастырады.

F# нұсқасында осы жағдайлар үшін `Ok` және `Error` қолданылады.
`.fs` файлы Node.js арқылы орындалмайды, ол F# жобасына арналған.

## GitHub

https://github.com/ruslan20200/node-bek
