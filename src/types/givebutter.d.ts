declare namespace JSX {
  interface IntrinsicElements {
    "givebutter-widget": React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement> & {
        id?: string;
      },
      HTMLElement
    >;
    "givebutter-giving-form": React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement> & {
        campaign?: string;
        "show-goal-bar"?: string;
        "theme-color"?: string;
        "max-width"?: string;
      },
      HTMLElement
    >;
  }
}

export {};
