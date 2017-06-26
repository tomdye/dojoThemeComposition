import { w, v } from '@dojo/widget-core/d';
import { DNode, WidgetProperties } from '@dojo/widget-core/interfaces';
import { WidgetBase } from '@dojo/widget-core/WidgetBase';

import HelloWorld from './widgets/HelloWorld';

import baseTheme from './themes/base/theme';
import darkTheme from './themes/dark/theme';
import lightTheme from './themes/light/theme';

export default class App extends WidgetBase<WidgetProperties> {

	protected render() {
		return v('hello-world-holder', [
			w(HelloWorld, { key: 'vanilla' }),
			w(HelloWorld, { key: 'base', theme: baseTheme }),
			w(HelloWorld, { key: 'light', theme: darkTheme }),
			w(HelloWorld, { key: 'dark', theme: lightTheme })
		]);
	}
}
