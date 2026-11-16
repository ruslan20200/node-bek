module Arithmetic =
    let add (a: float) (b: float) : float =
        a + b

    let subtract (a: float) (b: float) : float =
        a - b

    let multiply (a: float) (b: float) : float =
        a * b

    let divide (a: float) (b: float) : Result<float, string> =
        if b = 0.0 then
            Error "Ошибка: на ноль делить нельзя."
        else
            Ok (a / b)
