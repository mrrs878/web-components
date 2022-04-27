/*
 * @Author: mrrs878@foxmail.com
 * @Date: 2022-04-27 22:04:19
 * @LastEditors: mrrs878@foxmail.com
 * @LastEditTime: 2022-04-27 22:14:53
 */

import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("m-reply")
class Reply extends LitElement {
  static styles = css`
    :host {
      --margin: 10px;
      --padding: 16px;
      --btn-padding: 10px;
      --radius: 4px;
      --white-color: #ffffff;
      --gray-color: #00000073;
      --primary-color: #0081FF;
      --primary-color-hover: #40a9ff;
      --primary-color-outline: rgba(24, 144, 255, 0.2);

      --border-color: #d9d9d9;

      font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, apple color emoji, segoe ui emoji, Segoe UI Symbol, noto color emoji;
    }

    .reply-c {
      display: flex;
      flex-direction: column;
      width: 400px;
    }

    .avatar {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      margin-right: var(--margin);
    }

    .submit-form {
      display: flex;
      padding: var(--padding) 0;
    }

    .input-form {
      display: flex;
      flex-direction: column;
    }

    .input {
      border: 1px solid var(--border-color);
      transition: all .3s, height 0s;
      padding: 4px 11px;
      border-radius: var(--radius);
      resize: vertical;
      font-family: inherit;
      line-height: 1.5715;
      vertical-align: bottom;
      min-height: 32px;
    }

    .input:focus {
      border-color: var(--primary-color-hover);
      box-shadow: 0 0 0 2px var(--primary-color-outline);
      border-right-width: 1px;
      outline: 0;
    }

    .submit-btn {
      width: max-content;
      height: 30px;
      margin-top: var(--margin);
      background: var(--primary-color);
      border-radius: var(--radius);
      border: none;
      color: var(--white-color);
      padding-left: var(--btn-padding);
      padding-right: var(--btn-padding);
    }
  `;

  @property({ type: String })
  placeholder = "说点什么吧";

  @property({ type: String })
  avatar = 'https://joeschmoe.io/api/v1/random';

  @property({ type: Array })
  comments: Array<any> = [];

  constructor() {
    super();
  }

  onSubmit() {
    const comment: HTMLInputElement|null = this.shadowRoot!.querySelector('#input');
    const res = this.dispatchEvent(new CustomEvent('submit-comment', {
      detail: comment!.value,
    }));
    comment!.value = "";
  }

  renderComments(comments = []) {
    const Comment = ({ avatar, nickName, comment }: any) => (`
      <div class="comment-c">
        <img src="${avatar}" alt="" class="avatar">
        <div class="comment-content">
          <div>
            <span class="nick-name">${nickName}</span>
            <span class="reply-time">几秒前</span>
          </div>
          <div class="comment-text">${comment}</div>
        </div>
      </div>
    `);
    const commentsContainer = this.shadowRoot!.querySelector('#commentsContainer');
    if (commentsContainer) {
      commentsContainer.innerHTML = comments?.reduce((acc, cur) => `${acc}${Comment(cur)}`, '');
    }
  }

  render() {
    console.log('render', this.comments);
    return html`
      <div class="reply-c">
        <div class="comments-c" id="commentsContainer">${this.comments.map((comment) => html`
          <m-comment .avatar="${comment.avatar}" .nickName="${comment.nickName}" .comment="${comment.comment}" />`)
        }</div>
        <div class="submit-form">
          <img src='${this.avatar}' id="defaultAvatar" alt="" class="avatar">
          <div class="input-form">
            <textarea class="input" id="input" placeholder="${this.placeholder}" cols="50" rows="5"></textarea>
            <button class="submit-btn" id="submitBtn" @click=${this.onSubmit}>Add Comment</button>
          </div>
        </div>
      </div>
    `;
  }
}

export { Reply };
