import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Header, Menu, Icon, Grid, Button, List} from 'semantic-ui-react';

class SpotifyReact extends React.Component {

  render() {
    const backgroundStyle = {background: "url('https://i.ytimg.com/vi/_TVMVbTC0U0/maxresdefault.jpg')"};
    const menuStyle = {color:"white",backgroundColor:"black"};
    const fontStyle = {color:"white"};
    const textStyle = {color: "white",fontSize: "75px",fontWeight: 800, paddingTop: "200px"};
    const tinyStyle ={color: "white",fontSize: "16px",margin: "10px"};
    const footerStyle ={color: "white",paddingBottom: "100px", backgroundColor: "black", marginTop:"75px" ,paddingLeft: "300px"}
    const columnStyle = {width: "100px"}
    return (
        <div style={backgroundStyle}>
          <Menu class="ui borderless transparent topmenu menu" style= {menuStyle}>
            <Container style= {menuStyle}>
              <Menu.Item><Icon size="large" inverted name='spotify' >Spotify</Icon></Menu.Item>
              <Menu.Item position="right" style= {menuStyle} name='Premium'/>
              <Menu.Item style= {menuStyle} name='Help'/>
              <Menu.Item style= {menuStyle} name='Download'/>
              <Menu.Item style= {menuStyle} name='|'/>
              <Menu.Item style= {menuStyle} name='Sign Up'/>
              <Menu.Item style= {menuStyle} name='Login'/>
            </Container>
          </Menu>

          <Container textAlign="center" style={fontStyle} >

            <Header style={textStyle}> Music for everyone.</Header>
            <Header style={tinyStyle}> Millions of songs. No credit card needed.</Header>
            <Button color='green' >GET SPOTIFY FREE</Button>
          </Container>

          <Grid divided="vertically" style = {footerStyle}>
            <Grid.Row>
              <Grid.Column style ={columnStyle}>
                <Menu.Item><Icon inverted name='spotify' >Spotify</Icon></Menu.Item>
              </Grid.Column>
              <Grid.Column width={3}>
                Company
                <hr></hr>
                <List items={['About', 'Jobs', 'For the Record']}></List>
              </Grid.Column>
              <Grid.Column width={3}>
                Communities
                <hr></hr>
                <List items={['For Artists', 'Developers', 'Brands','Investors','Vendors']}></List>
              </Grid.Column>
              <Grid.Column width={3}>
                Useful Links
                <hr></hr>
                <List items={['Help', 'Web Player']}></List>
              </Grid.Column>
              <Grid.Column width={3}>
                <Menu style={menuStyle}>
                  <Icon size='large' name='instagram' inverted color='white'/>
                  <Icon size='large' name='facebook' inverted color='white'/>
                  <Icon size='large' name='twitter' inverted color='white'/></Menu>
              </Grid.Column>
            </Grid.Row>


          </Grid>

        </div>

  );
  }
}


ReactDOM.render(<SpotifyReact/>, document.getElementById('root'));