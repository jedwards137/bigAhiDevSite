import { Grid, Typography, Box, Container } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React from 'react';
import { BannerComponent } from '../../components/bigAhiDev/BannerComponent';
import { ServicesComponent } from '../../components/bigAhiDev/Services/ServicesComponent';
import { ValuesComponent } from '../../components/bigAhiDev/ValuesComponent';
import { ContactComponent } from '../../components/bigAhiDev/ContactComponent';
import { CopyrightComponent } from '../../components/bigAhiDev/CopyrightComponent';

export const BigAhiDevLandingPage = () => {
	
	function getStyles() {
		return makeStyles((theme: Theme) => 
			createStyles({
        mainContainer: {
          maxWidth: '100vw',
        },
        generalContainer: {
          paddingTop: theme.spacing(16),
          paddingBottom: theme.spacing(14),
        },
				bannerContainer: {
          backgroundImage: `linear-gradient(125deg,#5f51fb 0%,#767cfd 64%,#8ca7ff 100%)`,
        },
				servicesContainer: {
          backgroundColor: theme.palette.common.white,
				},
				valuesContainer: {
					backgroundColor: '#fbfbfd',
        },
        contactContainer: {
          backgroundColor: '#07112d',
        },
        copyrightContainer: {
          backgroundColor: '#07112d'
        },
			})
		);
	}
	const classes = getStyles()();

	return (
    <Box className={classes.mainContainer}>
      <Box className={classes.bannerContainer}>
        <Container>
          <BannerComponent />
        </Container>
      </Box>

      <Box className={classes.generalContainer  + " " + classes.servicesContainer}>
        <Container>
          <ServicesComponent />
        </Container>
      </Box>

      <Box className={classes.generalContainer  + " " + classes.valuesContainer}>
        <Container>
          <ValuesComponent />
        </Container>
      </Box>

      <Box className={classes.generalContainer  + " " + classes.valuesContainer}>
        <Container>
          <ContactComponent />
        </Container>
      </Box>

      <Box className={classes.copyrightContainer}>
        <Container>
          <CopyrightComponent />
        </Container>
      </Box>
    </Box>
	);
}