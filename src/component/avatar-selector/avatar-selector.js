import React from 'react';
import {Grid, List} from 'antd-mobile';

class AvatarSelector extends React.Component{
    constructor(props) {
        super(props)
        this.state={}
    }
    render() {
        const avatarList = 'head1,head2,head3,head4,head5,head6,head7,head8,head9,head10'.split(',').map(v=>({
            icon: require(`../img/${v}.png`),
            text: v
        }))
        const gridHeader = this.state.text ? (<div>
                                                <span>已选择头像</span>
                                                <img style={{width:20}} src={this.state.icon}/>
                                              </div>)
                                            :'请选择头像'

        return (
            <div>
                <List renderHeader={() => gridHeader}>
                    <Grid
                        data={avatarList}
                        columnNum={5}
                        onClick={elm => {
                            this.setState(elm)
                            this.props.selectAvatar(elm.text)
                        }}
                    ></Grid>
                </List>

            </div>
        )
    }
}

export default AvatarSelector