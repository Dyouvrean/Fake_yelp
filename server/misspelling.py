def med_dp(str1, str2):

    def med_dp_helper(str1, str2, m, n):

        d = {}
        key = m, n

        # = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = #
        #      TODO: Complete the code by filling the "pass"         #
        # = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = #
        
        if m == 0: 
           return n
        if n == 0: 
           return m 
        if key in d: 
           return d[key]
        if str1[m - 1] == str2[n - 1]: 
          return med_dp_helper(str1, str2, m - 1, n - 1)

        # Hint: you probably want to write something here
        d[key] = min(1 + med_dp_helper(str1, str2, m, n - 1), 
                     1 + med_dp_helper(str1, str2, m - 1, n), 
                     2 + med_dp_helper(str1, str2, m - 1, n - 1))
        return d[key]

    return med_dp_helper(str1, str2, len(str1), len(str2))

def correct_spelling(misspelled_word, dictionary):
    cand = [item for item in dictionary if item.startswith(misspelled_word)]
    close_p = {}
    for word in cand:
       close_p[word] = med_dp(misspelled_word,word)

    sorted_d = dict(sorted(close_p.items(), key=lambda item: item[1]))
    first_10_by_keys = dict(list(sorted_d.items())[:10])
    return first_10_by_keys