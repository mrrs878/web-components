/*
 * @Author: mrrs878@foxmail.com
 * @Date: 2022-04-27 21:39:41
 * @LastEditors: mrrs878@foxmail.com
 * @LastEditTime: 2022-04-27 22:19:19
 */

import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import "./components/Comment.ts";
import "./components/Reply.ts";

@customElement("m-app")
class App extends LitElement {

  @property()
  private comments: Array<any> = [];

  private avatar = 'https://joeschmoe.io/api/v1/random'

  private nickName = 'Echo'

  constructor() {
    super();
  }

  onSubmitComment(e: any) {
    this.comments = [...this.comments, ({
      comment: e.detail,
      nickName: this.nickName,
      avatar: this.avatar,
    })];
  }

  render() {
    return html`
      <m-reply id="reply" .comments=${this.comments} @submit-comment=${this.onSubmitComment} />
    `;
  }
}

window.addEventListener('load', () => {
  document.querySelector("body")!.innerHTML = `<m-app id="reply" />`
});
