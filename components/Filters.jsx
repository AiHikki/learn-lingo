import CustomSelect from './CustomSelect';
import { formatLanguagesForSelect, levels, prices } from 'lib/data';

const Filters = ({ languages }) => {
  const formattedLanguages = formatLanguagesForSelect(languages);

  return (
    <ul className="mb-8 flex gap-5">
      <li>
        <CustomSelect
          options={formattedLanguages}
          label="Languages"
          width="221px"
          placeholder="Language"
          // isMulti
        />
      </li>
      <li>
        <CustomSelect
          options={levels}
          label="Level of knowledge"
          width="198px"
          placeholder="Level"
        />
      </li>
      <li>
        <CustomSelect options={prices} label="Price" width="124px" placeholder="Price" />
      </li>
    </ul>
  );
};

export default Filters;
