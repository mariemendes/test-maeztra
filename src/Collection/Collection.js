import React from 'react';
import styles from './Collection.module.css';
import Paragraph from '../components/Paragraph/Paragraph';
import Title from '../components/Title/Title';

const Collection = () => {
  return (
    <div className={styles.divCollection}>
      <div>
        <Title size="24px">Lorem ipsum</Title>
        <Paragraph size="14px">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum
          mauris posuere fusce proin mattis. Hendrerit cras ut nunc enim dictum.
          Mattis proin ut quis donec sed eget nulla. Vel mi ut mauris integer.
          Nibh sagittis in lobortis sed cursus condimentum velit pharetra. Amet
          luctus ut vulputate scelerisque placerat consequat. Neque arcu mi
          iaculis id. Vel vitae, pharetra, a nec tristique. Feugiat id tortor eu
          mauris pulvinar velit massa. Ut ornare augue eget convallis volutpat
          aliquet. Sed sed pellentesque porttitor phasellus donec condimentum
          sit sapien.
        </Paragraph>
      </div>
      <div>
        <img src="https://i.imgur.com/1vLCv01.png" alt="Coleção Imagem" />
      </div>
    </div>
  );
};

export default Collection;
