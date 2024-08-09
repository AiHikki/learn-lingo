import CustomSelect from './CustomSelect';
import { formatLanguagesForSelect, levels, prices } from 'lib/data';
import { motion } from 'framer-motion';

const Filters = ({ languages, updateFilter }) => {
  const formattedLanguages = formatLanguagesForSelect(languages);

  return (
    <motion.ul
      className="mb-8 flex gap-5"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <li>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <CustomSelect
            options={formattedLanguages}
            label="Languages"
            width="221px"
            placeholder="Language"
            onChange={({ value }) => updateFilter('language', value)}
          />
        </motion.div>
      </li>
      <li>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <CustomSelect
            options={levels}
            label="Level of knowledge"
            width="198px"
            placeholder="Level"
            onChange={({ value }) => updateFilter('level', value)}
            isSearchable={false}
          />
        </motion.div>
      </li>
      <li>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <CustomSelect
            options={prices}
            label="Price"
            width="124px"
            placeholder="Price"
            onChange={({ value }) => updateFilter('price', value)}
            isSearchable={false}
          />
        </motion.div>
      </li>
    </motion.ul>
  );
};

export default Filters;
