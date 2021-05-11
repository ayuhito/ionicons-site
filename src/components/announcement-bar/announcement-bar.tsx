import { Component, State, h } from "@stencil/core";
import Prismic from "prismic-javascript";
import PrismicDOM from "prismic-dom";
import { ResponsiveContainer } from "@ionic-internal/ionic-ds";
import { slugify } from "../../global/common";

@Component({
  tag: "announcement-bar",
  styleUrl: "announcement-bar.scss",
  assetsDirs: ["announcement-bar-assets"],
})
export class AnnouncementBar {
  apiURL = "https://ionicframeworkcom.prismic.io/api/v2";

  @State() data: any;

  constructor() {
    this.getLatest();
  }

  async getLatest() {
    const api = await Prismic.getApi(this.apiURL);
    const single = await api.getSingle("announcement_bar");
    this.data = single.data;
    // console.log(single);
  }

  render() {
    if (!this.data || Object.keys(this.data).length === 0) return;

    const theme = slugify(this.data.theme);

    return (
      <a href={this.data.link.url} target="_blank" class="wrapper">
        <nav
          style={{
            "--asset-path": `url('assets/img/components/announcement-bar/bg-${theme}.png')`,
          }}
          class={`announcement-bar announcement-bar--${theme}`}
        >
          <ResponsiveContainer>
            <div innerHTML={PrismicDOM.RichText.asHtml(this.data.text)}></div>
            <a href={this.data.link.url} target="_blank" class="button">
              {this.data.button_text}{" "}
              <span style={{ letterSpacing: "0" }}>-&gt;</span>
            </a>
          </ResponsiveContainer>
        </nav>
      </a>
    );
  }
}
