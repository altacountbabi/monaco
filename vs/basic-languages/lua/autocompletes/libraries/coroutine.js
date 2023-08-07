const coroutineDocs = 'https://create.roblox.com/docs/reference/engine/libraries/coroutine'
define(["require", "exports"], function (require, exports) {
	Object.defineProperty(exports, "__esModule", { value: true })

	exports.autocompletes = {

		Function: {
			'close()': {
				insertText: 'close(${1:thread})',
				documentation: {
					value: [
						'```lua', 'function close([f: function])\n  -> thread', '```',
						'',
						'Creates a new coroutine, with body f. f must be a Lua function.',
						'',
						`[View documents](${coroutineDocs}#close)`
					].join('\n')
				},
			},

			'create()': {
				insertText: 'create(${1:function})',
				documentation: {
					value: [
						'```lua', 'function create([f: function])\n  -> thread', '```',
						'',
						'Creates a new coroutine, with body f. f must be a Lua function.',
						'',
						`[View documents](${coroutineDocs}#create)`
					].join('\n')
				},
			},

			'isyieldable()': {
				insertText: 'isyieldable()',
				documentation: {
					value: [
						'```lua', 'function isyieldable([f: function])\n  -> boolean', '```',
						'',
						'Returns `true` if the coroutine this function is called within can safely yield.',
						'',
						`[View documents](${coroutineDocs}#isyieldable)`
					].join('\n')
				},
			},

			'resume()': {
				insertText: 'resume(${1:thread}, ${2:Variant})',
				documentation: {
					value: [
						'```lua', 'function resume([co: thread, ...: Variant])\n  -> boolean', '```',
						'',
						'Starts or continues the execution of coroutine `co`.',
						'',
						`[View documents](${coroutineDocs}#resume)`
					].join('\n')
				},
			},

			'running()': {
				insertText: 'running()',
				documentation: {
					value: [
						'```lua', 'function running()\n  -> thread', '```',
						'',
						'Returns the running coroutine.',
						'',
						`[View documents](${coroutineDocs}#running)`
					].join('\n')
				},
			},

			'status()': {
				insertText: 'status(${1:thread})',
				documentation: {
					value: [
						'```lua', 'function status([co: thread])\n  -> string', '```',
						'',
						'Returns the status of coroutine `co` as a string.',
						'',
						`[View documents](${coroutineDocs}#status)`
					].join('\n')
				},
			},

			'wrap()': {
				insertText: 'wrap(${1:function})',
				documentation: {
					value: [
						'```lua', 'function wrap([f: function])\n  -> function', '```',
						'',
						'Creates a new coroutine and returns a function that, when called, resumes the coroutine.',
						'',
						`[View documents](${coroutineDocs}#wrap)`
					].join('\n')
				},
			},

			'yield()': {
				insertText: 'yield(${1:Tuple})',
				documentation: {
					value: [
						'```lua', 'function yield([f: function])\n  -> Tuple<Variant>', '```',
						'',
						'Suspends execution of the coroutine.',
						'',
						`[View documents](${coroutineDocs}#yield)`
					].join('\n')
				},
			},
		},
	}
})