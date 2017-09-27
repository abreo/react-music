/**
 * Created by 0easy-23 on 2017/9/1.
 * 油路配置（方便本地打包，使用了HashRouter）;
 * tips:开发环境下面使用了browserHistory，打包上线的时候需要服务器进行配置;
 */
import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Home from '../containers/Home/Index';
import Login from '../containers/User/Login';
import Album from '../components/Home/Album';
import Play from '../containers/Play/Play';
import AlbumList from '../containers/Home/AlbumList';
import Player from '../containers/Play/Player'
import Rank from '../containers/Rank/Rank';
const Routes = () => (
    <div className="app">
        <Player/>
        <Router>
            <Switch>
                <Route path="/" exact={true} component={Home}/>
                <Route path='/login' component={Login}/>
                <Route path="/album/:id" component={Album}/>
                <Route path="/album" component={AlbumList}/>
                <Route path="/play" component={Play}/>
                <Route path="/rank" component={Rank}/>
                <Redirect from="/undefined" to={{pathname: '/', search: '?mold=redirect'}}/>
            </Switch>
        </Router>
    </div>
);

export default Routes;