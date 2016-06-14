export default class {
  constructor(opts) {
    this.opts = opts || {};
  }

  cook(raw) {
    const { opts } = this;

    // Replace traditionalMarkdownLinebreaks and defaultCodeLang in camelCase

    // TODO: REFACTOR THIS OUT
    if (opts.traditionalMarkdownLinebreaks) {
      Discourse.SiteSettings.traditional_markdown_linebreaks = true;
    }

    if (opts.defaultCodeLang) {
      Discourse.SiteSettings.default_code_lang = opts.defaultCodeLang;
    }

    const cookArgs = { sanitize: !!opts.sanitize };
    return Discourse.Markdown.cook(raw, cookArgs);
  }
};
