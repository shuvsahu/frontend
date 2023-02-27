import { Card } from 'antd';

const CustomCard = ({title,style,content}) => (
    <Card
        title={title}
        style={style}
    >
        {content}
    </Card>
);

export default CustomCard