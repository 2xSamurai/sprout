import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  mainWrap: {
    flex: 1,
  },
  scrollWrap: {
    zIndex: 99999,
    paddingBottom: 140,
  },
  laWrapper: {
    paddingHorizontal: 24,
    zIndex: 9999,
  },
  mainTitle: {
    fontSize: 21,
    color: "red",
    marginBottom: 60,
  },
  secondaryTitle: {
    fontSize: 14,
    marginBottom: 20,
  },
  content: {
    fontSize: 14,
    color: "red",
    lineHeight: 18,
    marginBottom: 20,
  },
  topSpace: {
    marginTop: 20,
  },
  linkTxt: {
    color: "red",
  },
  customSpace: {
    marginTop: 20,
    marginBottom: 7,
  },
  noSpace: {
    margin: 0,
  },
  innerWrapper: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "red",
    marginBottom: 10,
  },
  libTitle: {
    fontSize: 12,
    color: "red",
  },
  libDesc: {
    fontSize: 14,
    color: "red",
    marginBottom: 10,
  },
  footerWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 22,
    paddingTop: 30,
    paddingBottom: 20,
    position: 'absolute',
    bottom: 0,
    zIndex: 1,
    backgroundColor: "red",
    width: '100%',
  },
  footerButton: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "red",
    backgroundColor: "red",
    width: '48.5%',
  },
  primaryButton: {
    borderWidth: 1,
    borderColor: "red",
    backgroundColor: "red",
    marginLeft: 10,
  },
  buttonText: {
    color: "red",
    textAlign: 'center',
  },
  primaryTxt: {
    color: "red",
  },
  footerGrad: {
    height: 10,
    position: 'absolute',
    top: 1,
    left: 0,
    right: 0,
  },
});
