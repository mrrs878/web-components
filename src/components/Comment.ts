/*
 * @Author: mrrs878@foxmail.com
 * @Date: 2022-04-27 22:01:44
 * @LastEditors: mrrs878@foxmail.com
 * @LastEditTime: 2022-04-27 22:01:45
 */

import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("m-comment")
class Comment extends LitElement {

  static styles = css`
    .comment-c {
      display: flex;
      padding: var(--padding) 0;
    }

    .comment-c:first-child {
      padding-top: 0;
    }

    .comment-content .nick-name,
    .reply-time {
      color: var(--gray-color);
      font-size: 12px;
    }

    .comment-content .reply-time {
      margin-left: 5px;
    }

    .comment-content .comment-text {
      margin-top: 5px;
      font-size: 14px;
      line-height: 1.5715;
      ;
    }

    .avatar {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      margin-right: var(--margin);
    }
  `

  @property({ type: String })
  avatar = ''

  @property({ type: String })
  nickName = ''

  @property({ type: Array })
  comment = ''

  render() {
    return html`
      <div class="comment-c">
        <img src="${this.avatar}" alt="" class="avatar">
        <div class="comment-content">
          <div>
            <span class="nick-name">${this.nickName}</span>
            <span class="reply-time">几秒前</span>
          </div>
          <div class="comment-text">${this.comment}</div>
        </div>
      </div>
    `
  }
}

export { Comment };
