import { defaultTheme } from '../styles/themes/default'

export const orderOptions = [
  {
    value: 'AC',
    label: 'Acre',
  },
  {
    value: 'AL',
    label: 'Alagoas',
  },
  {
    value: 'AP',
    label: 'Amapá',
  },
  {
    value: 'AM',
    label: 'Amazonas',
  },
  {
    value: 'BA',
    label: 'Bahia',
  },
  {
    value: 'CE',
    label: 'Ceará',
  },
  {
    value: 'DF',
    label: 'Distrito Federal',
  },
  {
    value: 'ES',
    label: 'Espírito Santo',
  },
  {
    value: 'GO',
    label: 'Goiás',
  },
  {
    value: 'MA',
    label: 'Maranhão',
  },
  {
    value: 'MT',
    label: 'Mato Grosso',
  },
  {
    value: 'MS',
    label: 'Mato Grosso do Sul',
  },
  {
    value: 'MG',
    label: 'Minas Gerais',
  },
  {
    value: 'PA',
    label: 'Pará',
  },
  {
    value: 'PB',
    label: 'Paraíba',
  },
  {
    value: 'PR',
    label: 'Paraná',
  },
  {
    value: 'PE',
    label: 'Pernambuco',
  },
  {
    value: 'PI',
    label: 'Piauí',
  },
  {
    value: 'RJ',
    label: 'Rio de Janeiro',
  },
  {
    value: 'RN',
    label: 'Rio Grande do Norte',
  },
  {
    value: 'RS',
    label: 'Rio Grande do Sul',
  },
  {
    value: 'RO',
    label: 'Rondônia',
  },
  {
    value: 'RR',
    label: 'Roraima',
  },
  {
    value: 'SC',
    label: 'Santa Catarina',
  },
  {
    value: 'SP',
    label: 'São Paulo',
  },
  {
    value: 'SE',
    label: 'Sergipe',
  },
  {
    value: 'TO',
    label: 'Tocantins',
  },
]

export const selectStyles = {
  control: (base: any, state: any) => ({
    ...base,
    width: '100%',
    height: '51px',
    backgroundColor: '#fff',
    borderRadius: '6px',
    outline: 0,
    border: 'none',
    boxShadow: state.isFocused
      ? `0 0 0 2px ${defaultTheme['green-500']}`
      : 'none',
    cursor: state.isDisabled ? 'not-allowed' : 'pointer',
  }),
  singleValue: (base: any) => ({
    ...base,
    fontSize: '1rem',
    fontFamily: 'Roboto',
    fontWeight: 400,
    color: defaultTheme['gray-300'],
  }),
  placeholder: (base: any) => ({
    ...base,
    fontFamily: 'Roboto',
    fontSize: '1rem',
    fontWeight: 400,
    color: defaultTheme['gray-300'],
  }),
  option: (base: any, state: any) => ({
    ...base,
    borderBottom: `1px solid`,
    height: '100%',
    cursor: 'pointer',
    fontFamily: 'Roboto',
    fontSize: '1rem',
    fontWeight: 500,
    borderColor: defaultTheme['gray-300'],
    color: state.isSelected ? '#fff' : defaultTheme['gray-300'],
    backgroundColor: state.isSelected ? defaultTheme['purple-500'] : '#fff',
    display: state.isSelected ? 'none' : 'block',
    '&:hover': {
      backgroundColor: defaultTheme['purple-500'],
      color: '#fff',
    },
  }),
  indicatorsContainer: (base: any, state: any) => ({
    ...base,
    transition: 'all .2s ease',
    transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : null,
    'div > svg': {
      color: '#2c3e50',
    },
  }),
  indicatorSeparator: (base: any) => ({
    ...base,
    display: 'none',
  }),
  menu: (base: any) => ({
    ...base,
    marginTop: 0,
    backgroundColor: '#fff',
  }),
  menuPortal: (base: any) => ({
    ...base,
    zIndex: '10',
  }),
}
