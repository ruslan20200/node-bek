const http = require("http");

const users = [{ id: 1, name: "Иван" }];
let nextId = 2;

function send(res, status, data) {
    res.writeHead(status, { "Content-Type": "application/json; charset=utf-8" });
    res.end(JSON.stringify(data));
}

function getUsers(res, id) {
    if (id === null) {
        send(res, 200, users);
    } else {
        const user = users.find(user => user.id === id);
        if (user) {
            send(res, 200, user);
        } else {
            send(res, 404, { error: "Пользователь не найден." });
        }
    }
}

function postUser(res, data) {
    if (typeof data.name !== "string" || data.name.trim() === "") {
        send(res, 400, { error: "Введите имя пользователя." });
    } else {
        const user = { id: nextId++, name: data.name.trim() };
        users.push(user);
        send(res, 201, user);
    }
}

function putUser(res, id, data) {
    const index = users.findIndex(user => user.id === id);
    if (index === -1) {
        send(res, 404, { error: "Пользователь не найден." });
    } else if (typeof data.name !== "string" || data.name.trim() === "") {
        send(res, 400, { error: "Введите имя пользователя." });
    } else {
        users[index] = { id: id, name: data.name.trim() };
        send(res, 200, users[index]);
    }
}

function updateUser(res, id, data) {
    const user = users.find(user => user.id === id);
    if (!user) {
        send(res, 404, { error: "Пользователь не найден." });
    } else if (typeof data.name !== "string" || data.name.trim() === "") {
        send(res, 400, { error: "Введите новое имя пользователя." });
    } else {
        user.name = data.name.trim();
        send(res, 200, user);
    }
}

function deleteUser(res, id) {
    const index = users.findIndex(user => user.id === id);
    if (index === -1) {
        send(res, 404, { error: "Пользователь не найден." });
    } else {
        users.splice(index, 1);
        send(res, 200, { message: "Пользователь удалён." });
    }
}

async function readData(req) {
    let body = "";
    for await (const part of req) {
        body += part;
    }
    return JSON.parse(body);
}

const server = http.createServer(async function (req, res) {
    try {
        const path = new URL(req.url, "http://localhost").pathname;
        const match = path.match(/^\/users(?:\/([1-9]\d*))?\/?$/);
        if (!match) {
            send(res, 404, { error: "Такого адреса нет. Используйте /users или /users/1." });
            return;
        }

        const id = match[1] ? Number(match[1]) : null;
        const allowed = id === null ? ["GET", "POST"] : ["GET", "PUT", "PATCH", "DELETE"];
        if (!allowed.includes(req.method)) {
            res.setHeader("Allow", allowed.join(", "));
            send(res, 405, { error: "Этот метод здесь не поддерживается." });
            return;
        }

        let data;
        if (req.method === "POST" || req.method === "PUT" || req.method === "PATCH") {
            try {
                data = await readData(req);
            } catch {
                send(res, 400, { error: "Ошибка в JSON. Пример: {\"name\":\"Иван\"}" });
                return;
            }
            if (data === null || typeof data !== "object" || Array.isArray(data)) {
                send(res, 400, { error: "Передайте объект с именем пользователя." });
                return;
            }
        }

        if (req.method === "GET") {
            getUsers(res, id);
        } else if (req.method === "POST") {
            postUser(res, data);
        } else if (req.method === "PUT") {
            putUser(res, id, data);
        } else if (req.method === "PATCH") {
            updateUser(res, id, data);
        } else if (req.method === "DELETE") {
            deleteUser(res, id);
        }
    } catch (error) {
        console.error("Ошибка сервера:", error.message);
        send(res, 500, { error: "Внутренняя ошибка сервера." });
    }
});

server.listen(3000, "127.0.0.1", function () {
    console.log("Сервер запущен: http://localhost:3000/users");
});
