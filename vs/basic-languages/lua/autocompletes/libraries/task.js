const taskDocs = 'https://create.roblox.com/docs/reference/engine/libraries/task'
define(["require", "exports"], function (require, exports) {
	Object.defineProperty(exports, "__esModule", { value: true })

	exports.autocompletes = {

		Function: {

			'spawn()': {
				insertText: 'spawn(${1:functionOrThread}, ${2:...})',
				documentation: {
					value: [
						'```lua', 'function spawn([function, thread] [])\n  -> void', '```',
						'',
						'Calls/resumes a function/coroutine immediately through the engine scheduler.',
						'',
						`[View documents](${taskDocs}#spawn)`
					].join('\n')
				},
			},

			'defer()': {
				insertText: 'defer(${1:functionOrThread}, ${2:...})',
				documentation: {
					value: [
						'```lua', 'function defer(function | thread, any\n  -> thread', '```',
						'',
						'Calls/resumes a function/coroutine on the next resumption cycle.',
						'',
						`[View documents](${taskDocs}#defer)`
					].join('\n')
				}
			},

			'delay()': {
				insertText: 'delay(${1:duration}, ${2:functionOrThread}, ${3:... Variant})',
				documentation: {
					value: [
						'```lua', 'function delay([duration: number], [function, [args: any]])\n  -> thread', '```',
						'',
						'Schedules a function/coroutine to be called/resumed on the next Heartbeat after the given duration (in seconds) has passed, without throttling.',
						'',
						`[View documents](${taskDocs}#delay)`
					].join('\n')
				}
			},

			'desynchronize()': {
				insertText: 'desynchronize()',
				documentation: {
					value: [
						'```lua', 'function desynchronize()\n  -> void', '```',
						'',
						'Causes the following code to be run in parallel.',
						'',
						`[View documents](${taskDocs}#desynchronize)`
					].join('\n')
				}
			},

			'synchronize()': {
				insertText: 'synchronize()',
				documentation: {
					value: [
						'```lua', 'function synchronize()\n  -> void', '```',
						'',
						'Causes the following code to be run in serial.',
						'',
						`[View documents](${taskDocs}#synchronize)`
					].join('\n')
				}
			},

			'wait()': {
				insertText: 'wait(${1:number})',
				documentation: {
					value: [
						'```lua', 'function wait([duration: number])\n  -> number', '```',
						'',
						'Yields the current thread until the next Heartbeat in which the given duration (in seconds) has passed, without throttling.',
						'',
						`[View documents](${taskDocs}#wait)`
					].join('\n')
				}
			},

			'cancel()': {
				insertText: 'cancel(${1:thread})',
				documentation: {
					value: [
						'```lua', 'function cancel([thread: thread])\n  -> void', '```',
						'',
						'Cancels a thread, preventing it from being resumed.',
						'',
						`[View documents](${taskDocs}#cancel)`
					].join('\n')
				}
			}
		},
	}
})