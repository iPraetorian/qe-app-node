import * as Table from 'cli-table';

export const OutputHelper = {
  routeTable: (stack) => {
    const table = new Table({ head: [ '', 'Path' ] }),
      routes = stack.filter(r => r.route);

    if (routes.length) {
      console.log('\nRoutes');

      for (const key in routes) {
        if (routes.hasOwnProperty(key)) {
          let val = routes[ key ];
          if (val.route) {
            val = val.route;
            for (const method in val.methods) {
              const _o = {};
              _o[ method.toUpperCase() ] = [ val.path ];
              table.push(_o);
            }
          }
        }
      }

      console.log(table.toString());
    }

    return OutputHelper;
  },
  wrap: (content, length) => {
    let result = '',
      counter = 0;

    if (content.length > length) {
      for (let i = 0; i < content.length; i++) {
        counter += 1;

        result += content[ i ];
        if (counter === length) {
          result += '\n';
          counter = 0;
        }
      }
    }
    else {
      result = content;
    }

    return result;
  },
};
