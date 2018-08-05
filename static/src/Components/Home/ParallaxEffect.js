import React,{Component}from 'react';import Navigation from '../Navigation/Navigation.js';import NavigationTwo from '../Navigation/Navigation2.js';import ProjectDisplay from './Project_Display';import Pagefooter from '../PageFooter/PageFooter.js';import LazyHero from 'react-lazy-hero';import MyLandingPage from './Landpage';import Map from './Maps';import Footer from './Footer';import WOW from 'wow.js';import{Parallax,Background}from 'react-parallax'
import './ParallaxEffect.css';import mainLogo from "./BietLogo1.svg";import icon from './bulb.png';import Particles from 'react-particles-js';const para={particles:{number:{value:55,density:{enable:!0,value_area:700}}}}
class Home extends Component{constructor(props){super(props)
this.handleScroll=this.handleScroll.bind(this)}
componentDidMount(){window.addEventListener('scroll',this.handleScroll);new WOW().init()}
componentWillUnmount(){window.removeEventListener('scroll',this.handleScroll)}
handleScroll(e){const nav1=document.querySelector("#nav1");const nav2=document.querySelector('#nav2');if(window.scrollY>105){nav1.style.transform="translateY(-100%)";nav1.style.display="none";nav2.style.display="block"
nav2.style.transform="translateY(0%)"}else{nav2.style.display="none";nav2.style.transform="translateY(-100%)";nav1.style.display="block";nav1.style.transform="translateY(0%)"}}
render(){return(<div><div><Particles params={para}className="Particle"/><Navigation/><NavigationTwo className="hide"/><div className="paral1"><div className="head-box"><h1 className="Primary-head wow fadeIn">WELCOME TO</h1><span className="Main-head wow fadeIn " data-wow-duration="1s" data-wow-delay="0.4s">INNOVATION LABS</span></div></div><div className="Home_About-box"><div className="left-part"><h2 className="Secondary-head about_secondary_head wow fadeInLeft">About us</h2><p className="paragraph wow fadeInLeft">The Bio-Inspired Engineering Team is a comglomeration of the brightest minds in The Vellore Institute of Technology to create real solutions in this ever-changing landscape of technical innovations.</p></div><div className="right-part wow fadeInRight"><div className="image-box"><img src={icon}alt="icon" width="100%" height="100%"/></div></div></div><div><Parallax
blur={{min:-10,max:10}}
bgImage={require('./img4.4.jpg')}
strength={500}
bgClassName="paral3"><ProjectDisplay/></Parallax></div><div className="head-back"><Footer/><Pagefooter/></div></div></div>)}}
export default Home