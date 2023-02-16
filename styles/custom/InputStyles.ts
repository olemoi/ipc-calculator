import { createStyles } from "@mantine/core";



const useStyles = createStyles((theme) => ({
  numberInput: {
    label: {
      color: theme.colors.white,
    },
    width: '80%',
    marginLeft: theme.spacing.md,
    // paddingTop: theme.spacing.md,
    input: { borderRadius: theme.radius.md },
  },
  container: {
    backgroundColor: theme.colors.gray,
    width: '100%',
    height: '100%',
    borderRadius: theme.radius.md,
    padding: 0,
    paddingBottom: theme.spacing.xl,
    margin: 0,
  },
  verticalDivider: {
    borderLeft: '2px solid gray',
    height: 'calc(100% - 100px)',
    position: 'relative',
    left: '50%',
    marginLeft: '-1px',
    top: '100px',
    bottom: '100px'
  },
  grid: {
    margin: 0,
    padding: 0,
  },
  contentContainer: {
    marginLeft: theme.spacing.md,
    marginRight: theme.spacing.md,
    paddingTop: theme.spacing.md,
  },
  contentContainerWithBorder: {
    border: `1px solid gray`,
    borderRadius: theme.radius.md,
    marginLeft: theme.spacing.md,
    marginRight: theme.spacing.md,
    marginTop: theme.spacing.xl,
    padding: theme.spacing.md,
    boxShadow: theme.shadows.md,
  },
  contentTitle: {
    paddingTop: theme.spacing.md,
    paddingBottom: theme.spacing.md,
    paddingLeft: theme.spacing.md,
    fontSize: theme.fontSizes.xl,
  },
  title: {
    fontSize: 24,
    color: theme.colors.white,
    marginTop: theme.spacing.sm,
    marginBottom: theme.spacing.md,
  }
}))


export default useStyles
