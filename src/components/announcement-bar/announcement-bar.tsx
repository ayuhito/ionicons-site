import { Component, State, h } from '@stencil/core';
import Prismic from 'prismic-javascript';
import PrismicDOM from 'prismic-dom';
import { ResponsiveContainer } from '@ionic-internal/ionic-ds';

@Component({
  tag: 'announcement-bar',
  styleUrl: 'announcement-bar.scss'
})
export class AnnouncementBar {

  apiURL = 'https://ionicframeworkcom.prismic.io/api/v2';

  @State() data: any;

  constructor() {
    this.getLatest();
  }

  async getLatest() {
    const api = await Prismic.getApi(this.apiURL);
    const single = await api.getSingle('ionicons_announcement_bar')
    // console.log(single)
    this.data = single.data;

  }

  render() {

    if(!this.data || Object.keys(this.data).length === 0) return;

    return (
      <nav class={this.data.theme === 'Studio' ? 'announcement-bar--studio' : ''}>
        <ResponsiveContainer>
          <div innerHTML={PrismicDOM.RichText.asHtml(this.data.text)}></div>
          <a href={this.data.link.url}
             target="_blank">{this.data.button_text}</a>
        </ResponsiveContainer>
      </nav>
    )
  }
}