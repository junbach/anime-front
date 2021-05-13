import { Card } from "antd";
import { PureComponent, ReactNode } from "react";

import { Anime } from "../../services/anime-service";

const { Meta } = Card;
export default class AnimeCard extends PureComponent<{ data: Anime }> {
  render(): ReactNode {
    const {
      data: {
        attributes: { titles, posterImage, canonicalTitle, startDate },
      },
    } = this.props;
    return (
      <Card
        hoverable
        style={{ width: 240 }}
        cover={<img src={posterImage.small} alt={"poster"} />}
        title={canonicalTitle}>
        <Meta title={titles.ja_jp} description={startDate.toLocaleString()} />
      </Card>
    );
  }
}
