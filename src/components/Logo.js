import React from 'react'
import { useStyles } from '../styles'

export default function Logo() {

    const styles = useStyles();
  return (
    <img src = "/images/coff.jpg" alt = "Food Order" className={styles.largeLogo}></img>
  )
}
