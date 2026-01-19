import { useState } from 'react';
import { Greeting } from './components/Basic/Greeting';
import { ProfileCard } from './components/Basic/ProfileCard';
import { CompanyLogo } from './components/Basic/CompanyLogo';
import { Footer } from './components/Basic/Footer';
import { CounterApp } from './components/useState/CounterApp';
import { ToggleButton } from './components/useState/ToggleButton';
import { ShowHideText } from './components/useState/ShowHideText';
import { PasswordViewToggle } from './components/useState/PasswordViewToggle';
import { SidebarToggle} from './components/useState/SidebarToggle';
import { ListRendering } from './components/Mapping/ListRendering';
import { TeamDirectory } from './components/Mapping/TeamDirectory';
import { NavigationMenu } from './components/Mapping/NavigationMenu';


function App() {
  return (
    <main>
      {/* Basic Components Usage */}
      < Greeting name="John" />
      < ProfileCard username="john_doe" bio="John is a software developer."
      img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT58-VVT8Wch6ligqL9BVGs4hHtZ2ChZeURvA&s" />
      < CompanyLogo />
      < Footer 
        year="2026"
        company = "React Corp"
        />

     {/* USESTATE */}
     <h3>useState Examples</h3>
     < CounterApp />
     <h4>Toggle Button ON & OFF </h4>
     < ToggleButton />
     <h4>Show / Hide Text</h4>
    < ShowHideText />
    <h4>Password View Toggle</h4>
    < PasswordViewToggle />
    <h4> Sidebar Toggle </h4>
    < SidebarToggle />

    {/* MAPPING */}
    < ListRendering />
    < TeamDirectory />
    <h3>Navigation Menu</h3>
    < NavigationMenu />


    </main>
  )
}

export default App
