import * as React from 'react';
import Button from '@mui/joy/Button';
import Typography from '@mui/joy/Typography';
import Card from '@mui/joy/Card';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import TwoSidedLayout from '../components/TwoSidedLayout';
import {Task} from "@mui/icons-material";
import {Stack} from "@mui/joy";
import {useColorScheme} from "@mui/joy/styles";
import SvgIcon from '@mui/material/SvgIcon';
import {useState} from "react";

const twitterUrl = "https://www.baidu.com";
const discordUrl = "https://www.google.com";

const startDateStr = '2024/2/19 00:00:00';

function getTimeNow() {
    let d1 = new Date();
    return d1.getTime();
}

function getUTCTimeFromStr(str: string) {
    let d1 = new Date(str);
    let d2 = new Date(d1.getUTCFullYear(), d1.getUTCMonth(), d1.getUTCDate(), d1.getUTCHours(), d1.getUTCMinutes(), d1.getUTCSeconds(), d1.getUTCMilliseconds());
    return d2.getTime();
}

export default function HeroLeft() {
    let timeNow = getUTCTimeFromStr(startDateStr) - getTimeNow();
    const [time, setTime] = useState(timeNow)
    const [d, setD] = useState(parseInt((time / 1000 / 60 / 60 / 24).toString()));
    const [h, setH] = useState(parseInt((time / 1000 / 60 / 60 % 24).toString()));
    const [m, setM] = useState(parseInt((time / 1000 / 60 % 60).toString()));
    const [s, setS] = useState(parseInt((time / 1000 % 60).toString()));

    const countDown = () => {
        timeNow = getUTCTimeFromStr(startDateStr) - getTimeNow();
        setTime(timeNow);
        setD(parseInt((time / 1000 / 60 / 60 / 24).toString()));
        setH(parseInt((time / 1000 / 60 / 60 % 24).toString()));
        setM(parseInt((time / 1000 / 60 % 60).toString()));
        setS(parseInt((time / 1000 % 60).toString()));
    }

    let timeout = setTimeout(() => {
        countDown();
        // clearTimeout(timeout);
    }, 1000);

    const {mode} = useColorScheme();
    let url;
    if (mode === 'light') {
        url = "https://s1.imagehub.cc/images/2024/02/12/f36d34e1870fd1f78eb180526df8be42.png"
    } else {
        url = "https://s1.imagehub.cc/images/2024/02/12/5d2e131b3607953dcc1e239f9e414111.png"
    }
    const handleClickTwitter = () => {
        window.open(twitterUrl);
    }
    const handleClickDiscord = () => {
        window.open(discordUrl);
    }
    return (
        <TwoSidedLayout>
            <Stack direction="row" alignItems={'center'} spacing={2}>
                <img
                    width={48}
                    height={48}
                    src={url}
                    alt=""
                />
                <Typography
                    level="h1"
                    fontWeight="xl"
                    fontSize="clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)"
                >
                    Starpower
                </Typography>
            </Stack>
            <Card
                variant="outlined"
                color="neutral"
                orientation="horizontal"
                sx={{gap: 2, my: 1, textAlign: 'left'}}
            >
                <Typography fontSize="lg" textColor="text.secondary" lineHeight="lg" sx={{fontWeight: 'bold'}}>
                    TOTAL SUPPLY : <Typography textColor="gold">10000</Typography>
                </Typography>
            </Card>
            <Typography fontSize="lg" textColor="text.secondary" lineHeight="lg" sx={{fontWeight: 'light'}}>
                Starpower is committed to building the Web3 version of Tesla's global energy network, enabling virtual
                power plants and other applications by linking energy equipment.
                Miner FREE MINT Festival February 19, 2024.
            </Typography>
            <Stack direction="row" alignItems={'center'} spacing={2}>
                <SvgIcon color={'secondary'} onClick={handleClickTwitter}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="36"
                        height="36"
                        fill="currentColor"
                        className="bi bi-google"
                        viewBox="0 0 1024 1024"
                    >
                        <path
                            d="M919.759462 318.994613c0-9.605475-0.184234-19.102577-0.608696-28.534655 41.060787-30.595551 76.68666-68.894629 104.863684-112.720738a403.247526 403.247526 0 0 1-120.68436 33.017692c43.401647-26.708567 76.68666-69.423851 92.415219-120.68436-40.638132 24.645865-85.589515 42.265535-133.383889 51.446549-38.295465-43.575045-92.944441-71.329413-153.358869-72.360764-116.027926-1.918205-210.084998 96.132418-210.084999 218.973404 0 17.460724 1.826088 34.394031 5.451171 50.745736-174.722834-11.243716-329.55016-102.190479-433.116978-239.293373-18.071226 32.847907-28.438925 71.237296-28.438925 112.377556 0 77.811934 37.090717 146.970271 93.44657 187.779994-34.500598-1.560574-66.819283-12.009553-95.166091-29.141545v2.85744c0 108.752474 72.440238 199.870827 168.560013 221.13003-17.621477 5.012259-36.207475 7.62044-55.322696 7.526516a191.542349 191.542349 0 0 1-39.500214-4.325895c26.708567 89.120675 104.332655 154.231274 196.231295 156.400543-71.923659 59.635948-162.525433 95.258208-260.892145 95.00895-16.960401 0-33.720311-1.137918-50.15149-3.200621 93.011271 63.80109 203.418242 100.960443 322.104923 100.960443 386.350343 0.092117 597.636477-336.191629 597.636477-627.962902z"/>
                    </svg>
                </SvgIcon>
                <SvgIcon color={'secondary'} onClick={handleClickDiscord}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="42"
                        height="42"
                        fill="currentColor"
                        className="bi bi-google"
                        viewBox="0 0 1280 1024"
                    >
                        <path
                            d="M1049.062 139.672a3 3 0 0 0-1.528-1.4A970.13 970.13 0 0 0 808.162 64.06a3.632 3.632 0 0 0-3.846 1.82 674.922 674.922 0 0 0-29.8 61.2 895.696 895.696 0 0 0-268.852 0 619.082 619.082 0 0 0-30.27-61.2 3.78 3.78 0 0 0-3.848-1.82 967.378 967.378 0 0 0-239.376 74.214 3.424 3.424 0 0 0-1.576 1.352C78.136 367.302 36.372 589.38 56.86 808.708a4.032 4.032 0 0 0 1.53 2.75 975.332 975.332 0 0 0 293.65 148.378 3.8 3.8 0 0 0 4.126-1.352A696.4 696.4 0 0 0 416.24 860.8a3.72 3.72 0 0 0-2.038-5.176 642.346 642.346 0 0 1-91.736-43.706 3.77 3.77 0 0 1-0.37-6.252 502.094 502.094 0 0 0 18.218-14.274 3.638 3.638 0 0 1 3.8-0.512c192.458 87.834 400.82 87.834 591 0a3.624 3.624 0 0 1 3.848 0.466 469.066 469.066 0 0 0 18.264 14.32 3.768 3.768 0 0 1-0.324 6.252 602.814 602.814 0 0 1-91.78 43.66 3.75 3.75 0 0 0-2 5.222 782.11 782.11 0 0 0 60.028 97.63 3.728 3.728 0 0 0 4.126 1.4A972.096 972.096 0 0 0 1221.4 811.458a3.764 3.764 0 0 0 1.53-2.704c24.528-253.566-41.064-473.824-173.868-669.082zM444.982 675.16c-57.944 0-105.688-53.174-105.688-118.478s46.818-118.482 105.688-118.482c59.33 0 106.612 53.64 105.686 118.478 0 65.308-46.82 118.482-105.686 118.482z m390.76 0c-57.942 0-105.686-53.174-105.686-118.478s46.818-118.482 105.686-118.482c59.334 0 106.614 53.64 105.688 118.478 0 65.308-46.354 118.482-105.688 118.482z"/>
                    </svg>
                </SvgIcon>
            </Stack>
            <Card
                variant="outlined"
                color="neutral"
                orientation="horizontal"
                sx={{gap: 2, my: 1, textAlign: 'left', width: 1}}
            >
                <Task color="success" fontSize="large"/>
                <div>
                    <Typography fontSize="xl" fontWeight="lg" sx={{mb: 1}}>
                        WHITELIST
                    </Typography>
                    <Typography level="body-sm" color={"primary"}>
                        FREE MINT + 100 NOVA
                    </Typography>
                </div>
                <Typography color={"primary"} fontSize="l" fontWeight="lg" sx={{mb: 1}}>
                    {"start in " + d + "d " + h + "h " + m + "m " + s + "s"}
                </Typography>
            </Card>
            <Card
                variant="outlined"
                color="neutral"
                orientation="horizontal"
                sx={{gap: 2, my: 1, textAlign: 'left', width: 1}}
            >
                <AutoAwesomeIcon color="success" fontSize="large"/>
                <div>
                    <Typography fontSize="xl" fontWeight="lg" sx={{mb: 1}}>
                        PUBLIC MINT
                    </Typography>
                    <Typography level="body-sm" color={"primary"}>
                        FREE MINT + 5 0 NOVA
                    </Typography>
                </div>
                <Typography color={"primary"} fontSize="l" fontWeight="lg" sx={{mb: 1}}>
                    {"start in " + d + "d " + h + "h " + m + "m " + s + "s"}
                </Typography>
            </Card>
            <Button size="lg" color={'primary'}>MINT PIONEER PASS</Button>
        </TwoSidedLayout>
    );
}
