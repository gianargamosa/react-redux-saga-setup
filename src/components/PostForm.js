// @flow
import React, { Component } from "react";

import type { Post } from "../types/posts";

type Props = {
  post?: Post,
  onSubmit: (payload: { title: string, body: string }) => void
};

type State = {
  title: string,
  body: string,
  error: string
};

class PostForm extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    let title = "";
    let body = "";

    this.props.post && ({ title, body } = this.props.post);

    this.state = {
      title,
      body,
      error: ""
    };
  }

  handleTitleChange = (e: SyntheticEvent<HTMLInputElement>) => {
    const title = e.currentTarget.value
    this.setState(() => ({ title }))
  }

  handleBodyChange = (e: SyntheticEvent<HTMLInputElement>) => {
    const body = e.currentTarget.value
    this.setState(() => ({ body }))
  }

  handleSubmit = (e: SyntheticEvent<*>) => {
    e.preventDefault();

    let { title, body } = this.state;
    title = title.trim();
    body = body.trim();

    if (!title || !body) {
      this.setState({
        error: "Please provide both title and body."
      });
      return;
    }

    this.setState({
      error: ""
    });

    this.props.onSubmit({ title, body });
  };

  render() {
    const { title, body, error } = this.state;
    return (
      <div>
        {error && <div className="form-error">{error}</div>}
        <form className="form" onSubmit={this.handleSubmit}>
          <div className="field field-text">
            <label htmlFor="title">
              Title:
              <input
                type="text"
                id="title"
                value={title}
                onChange={this.handleTitleChange}
              />
            </label>
          </div>
          <div className="field field-text">
            <label htmlFor="body">
              Body:
              <input
                type="text"
                id="body"
                value={body}
                onChange={this.handleBodyChange}
              />
            </label>
          </div>
          <button className="btn">Save</button>
        </form>
      </div>
    );
  }
}
export default PostForm;
