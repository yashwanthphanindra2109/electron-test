import React from "react";
import PropTypes from "prop-types";
import deepmerge from "deepmerge";

const ThemeContext = React.createContext(null);
interface themeState {
  theme: any;
}
interface themeProps {
  theme: {
    key?: any;
    [x: string]: any;
  };
  children: React.ReactNode;
}
export default class ThemeProvider extends React.Component<
  themeProps,
  themeState
> {
  constructor(props) {
    super(props);

    this.state = {
      theme: props.theme,
    };
  }
  public static defaultProps = {
    theme: {},
  };
  updateTheme = (updates) => {
    this.setState(({ theme }) => ({
      theme: deepmerge(theme, updates),
    }));
  };

  getTheme = () => this.state.theme;

  changeTheme = (data) => {
    this.setState({
      theme: data,
    });
  };

  componentDidUpdate(prevProps) {
    const prevTheme = prevProps.theme;
    const { theme } = this.props;
    if (prevTheme.key !== theme.key) {
      this.changeTheme(theme);
    }
  }

  render() {
    return (
      <ThemeContext.Provider
        value={{
          theme: this.state.theme,
          updateTheme: this.updateTheme,
        }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export const ThemeConsumer = ThemeContext.Consumer;
