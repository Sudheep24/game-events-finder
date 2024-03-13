"use strict";
exports.__esModule = true;
var react_1 = require("react");
var EventsCars_1 = require("components\shared\EventsCars.tsx");
var Search_1 = require("components\shared\Search.tsx");
function Events() {
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("div", { className: "flex flex-col justify-center items-center mx-auto mt-10 p-5 gap-2 animate-slide-up" },
            react_1["default"].createElement("p", null, "Discover"),
            react_1["default"].createElement("p", { className: 'text-3xl' },
                "Explore the latest ",
                react_1["default"].createElement("span", { className: "bg-gradient-to-r from-blue-400 to-cyan-500 text-transparent bg-clip-text" }, "Gaming Events")),
            react_1["default"].createElement("p", null, "Find new outdoor events and connect with people")),
        react_1["default"].createElement("div", { className: "flex justify-center mt-4 animate-slide-up" },
            react_1["default"].createElement(Search_1.Search, null),
            react_1["default"].createElement("div", { className: "" },
                react_1["default"].createElement("select", { className: "block mt-10 text-black appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline" },
                    react_1["default"].createElement("option", null, "Select Location "),
                    react_1["default"].createElement("option", null, "New York"),
                    react_1["default"].createElement("option", null, "Los Angeles"),
                    react_1["default"].createElement("option", null, "Chicago"),
                    react_1["default"].createElement("option", null, "Houston")),
                react_1["default"].createElement("div", { className: "pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700" },
                    react_1["default"].createElement("svg", { className: "fill-current h-4 w-4", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20" },
                        react_1["default"].createElement("path", { d: "M10 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM3 7a7 7 0 0 1 14 0h-1.4a5.6 5.6 0 1 0-11.2 0H3z" }))))),
        react_1["default"].createElement(EventsCars_1.EventsCards, null)));
}
exports["default"] = Events;
