/**
 * Главный модуль приложения - точка входа
 *
 * @module      Index
 * @main        Ismax API server
 * @author      Ismax <shukhrat@ismax.ru>
 */

// Объявление модулей
const
    env = require('./env');

// Интеграция переменных окружения
process.env = Object.assign(env, process.env);

if (process.env.NODE_ENV === 'development') {
    require('./babel');

    // Модуль web-сервера
    require('./server');
} else {
    // Модуль web-сервера (Скомпилированный)
    require('./compile/server');
}
