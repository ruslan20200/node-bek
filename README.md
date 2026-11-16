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
a + 5 = Both values must be numbers.
10 / b = Both values must be numbers.
```

JavaScript нұсқасында `divide` функциясы сәтті есептегенде
`{ ok: true, value: ... }`, ал нөлге бөлгенде
`{ ok: false, error: "Division by zero is not allowed." }` қайтарады.
Сондықтан қате өңделіп, бағдарлама жұмысын жалғастырады.

Төрт функцияда да `if/else` арқылы аргументтер тексеріледі.
Әріп, мәтін (соның ішінде `"10"`), бос жол, `null`, `NaN` немесе
`Infinity` берілсе, `{ ok: false, error: "Both values must be numbers." }`
қайтарылады. Сандар берілсе, есептеу орындалады. Қосу, азайту және көбейту
нәтижесі — сан, бөлу нәтижесі жоғарыдағы `ok` және `value` өрістерімен беріледі.

F# нұсқасында осы жағдайлар үшін `Ok` және `Error` қолданылады.
`.fs` файлы Node.js арқылы орындалмайды, ол F# жобасына арналған.

## GitHub

https://github.com/ruslan20200/node-bek
