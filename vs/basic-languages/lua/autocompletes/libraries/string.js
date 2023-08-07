define(["require", "exports"], function (require, exports) {
	Object.defineProperty(exports, "__esModule", { value: true })

	exports.autocompletes = {

		Function: {

			'byte()': {
				insertText: 'byte(${1:s}, ${2:i}, ${3:j})',
				documentation: {
					value: [
						'```lua', 'function byte([s: string] [i: number] [j: number])\n  -> number', '```',
						'',
						'Returns the internal numeric codes of the characters in the given string s between positions i and j.',
						'',
						'[View documents](https://developer.roblox.com/en-us/api-reference/lua-docs/string#byte)',
					].join('\n')
				},
			},

			'char()': {
				insertText: 'char(${1:...})',
				documentation: {
					value: [
						'```lua', 'function char([...: number])\n  -> string', '```',
						'',
						'Returns a string with the character represented by each given code',
						'',
						'[View documents](https://developer.roblox.com/en-us/api-reference/lua-docs/string#char)',
					].join('\n')
				},
			},

			'find()': {
				insertText: 'find(${1:s}, ${2:pattern}, ${3:init}, ${4:plain})',
				documentation: {
					value: [
						'```lua', 'function find([s: string] [pattern: string] [init: number] [plain: boolean])\n  -> number', '```',
						'',
						'Returns a string with the character represented by each given code',
						'',
						'[View documents](https://developer.roblox.com/en-us/api-reference/lua-docs/string#char)',
					].join('\n')
				},
			},
		},
	}
})