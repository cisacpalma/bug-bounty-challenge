import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useTranslation } from 'react-i18next';

export default function LangMenu() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const { t, i18n } = useTranslation("app");

    const changeLanguage = (lang: string) => {
        i18n.changeLanguage(lang);
        handleClose();
    };

    return (
        <div>
            <Button
                id="lang-button"
                aria-controls={open ? 'lang-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                {t('lang')}
            </Button>
            <Menu
                id="lang-menu"
                aria-labelledby="lang-button"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >
                <MenuItem selected={i18n.language === 'en'} onClick={() => changeLanguage('en')}>English</MenuItem>
                <MenuItem selected={i18n.language === 'de'} onClick={() => changeLanguage('de')}>Deutsch</MenuItem>
            </Menu>
        </div>
    );
}