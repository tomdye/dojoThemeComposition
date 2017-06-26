import { WidgetBase } from '@dojo/widget-core/WidgetBase';
import { DNode } from '@dojo/widget-core/interfaces';
import { ThemeableMixin, ThemeableProperties, theme } from '@dojo/widget-core/mixins/Themeable';
import { v } from '@dojo/widget-core/d';
import * as css from './helloWorld.m.css';

export const HelloWorldBase = ThemeableMixin(WidgetBase);

@theme(css)
export default class HelloWorld extends HelloWorldBase<ThemeableProperties> {

	render() {
		const {
			theme
		} = this.properties;

		return v('div', { classes: this.classes(css.root).fixed(css.rootFixed) }, [
			v('label', { classes: this.classes(css.label).fixed(css.labelFixed) }, [ 'I am a label' ]),
			v('button', { classes: this.classes(css.button).fixed(css.buttonFixed) }, [
				v('span', { classes: this.classes(css.text).fixed(css.textFixed) }, [ 'Button Text' ])
			])
		]);
	}
}
