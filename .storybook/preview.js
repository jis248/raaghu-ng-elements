import { setCompodocJson } from "@storybook/addon-docs/angular";
import docJson from "../documentation.json";
setCompodocJson(docJson);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  toolbar: {
    icon: 'circlehollow',
    // Array of plain string values or MenuItem shape (see below)
    items: ['light', 'dark'],
    // Property that specifies if the name of the item will be displayed
    showName: true,
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: { inlineStories: true },
}
