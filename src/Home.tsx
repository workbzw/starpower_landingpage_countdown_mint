import React from "react";
import '@fontsource/inter';
import {CssVarsProvider, useColorScheme} from '@mui/joy/styles';
import Box from '@mui/joy/Box';
import CssBaseline from '@mui/joy/CssBaseline';
import IconButton from '@mui/joy/IconButton';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import framesxTheme from './theme';
import HeroLeft from './blocks/HeroLeft';

function ColorSchemeToggle() {
    const {mode, setMode} = useColorScheme();
    const [mounted, setMounted] = React.useState(false);
    React.useEffect(() => {
        setMounted(true);
    }, []);
    if (!mounted) {
        return null;
    }
    return (
        <IconButton
            id="toggle-mode"
            size="lg"
            variant="soft"
            color="neutral"
            onClick={() => {
                if (mode === 'light') {
                    setMode('dark');
                } else {
                    setMode('light');
                }
            }}
            sx={{
                position: 'fixed',
                zIndex: 999,
                top: '1rem',
                right: '1rem',
                borderRadius: '50%',
                boxShadow: 'sm',
            }}
        >
            {mode === 'light' ? <DarkModeRoundedIcon/> : <LightModeRoundedIcon/>}
        </IconButton>
    );
}

const HomePage = () => {
    return (
        <CssVarsProvider disableTransitionOnChange theme={framesxTheme} defaultMode={'dark'}>
            <CssBaseline/>
            <ColorSchemeToggle/>
            <Box
                sx={{
                    backgroundImage: "url('https://s1.imagehub.cc/images/2024/02/12/9c1246e49298cc34aa0a7ac9134808bd.png')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '100vh',
                    overflowY: 'scroll',
                    scrollSnapType: 'y mandatory',
                    '& > div': {
                        scrollSnapAlign: 'start',
                    },
                }}
            >
                <HeroLeft/>
            </Box>
        </CssVarsProvider>
    );
}
export default HomePage;
